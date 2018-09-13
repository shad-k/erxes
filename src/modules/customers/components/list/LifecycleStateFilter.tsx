import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { DataWithLoader, Icon } from 'modules/common/components';
import { __, router } from 'modules/common/utils';
import { Wrapper } from 'modules/layout/components';
import { SidebarCounter, SidebarList } from 'modules/layout/styles';
import { LIFECYCLE_STATE_TYPES } from '../../constants';
import { lifecycleStateChoices } from '../../utils';

type Props = {
  history: any,
  counts: any,
  loading: boolean,
  searchable: boolean
};

class LifecycleStateFilter extends Component<Props> {
  constructor(props, context) {
    super(props, context);

    this.renderCounts = this.renderCounts.bind(this);
  }

  renderCounts() {
    const { history, counts } = this.props;
    const { Section } = Wrapper.Sidebar;
    const paramKey = 'lifecycleState';

    return (
      <Section collapsible={true}>
        <Section.Title>{__('Filter by lifecycle states')}</Section.Title>
        <Section.QuickButtons>
          {router.getParam(history, 'lifecycleState') ? (
            <a
              tabIndex={0}
              onClick={() => {
                router.setParams(history, { lifecycleState: null });
              }}
            >
              <Icon icon="cancel-1" />
            </a>
          ) : null}
        </Section.QuickButtons>
        <div>
          <SidebarList>
            {lifecycleStateChoices(__).map(({ value, label }) => {
              return (
                <li key={Math.random()}>
                  <a
                    tabIndex={0}
                    className={
                      router.getParam(history, [paramKey]) === value
                        ? 'active'
                        : ''
                    }
                    onClick={() => {
                      router.setParams(history, { [paramKey]: value });
                    }}
                  >
                    {label}
                    <SidebarCounter>
                      {counts ? counts[value] : 0}
                    </SidebarCounter>
                  </a>
                </li>
              );
            })}
          </SidebarList>
        </div>
      </Section>
    );
  }

  render() {
    return (
      <DataWithLoader
        loading={this.props.loading}
        count={Object.keys(LIFECYCLE_STATE_TYPES).length}
        data={this.renderCounts()}
        emptyText="No lifecycle states"
        emptyIcon="type"
        size="small"
        objective={true}
      />
    );
  }
}

export default withRouter(LifecycleStateFilter);