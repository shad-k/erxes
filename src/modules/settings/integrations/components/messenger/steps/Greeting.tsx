import {
  ControlLabel,
  FormControl,
  FormGroup,
  Icon
} from 'modules/common/components';
import { FlexItem, LeftItem } from 'modules/common/components/step/styles';
import { __ } from 'modules/common/utils';
import * as React from 'react';
import Toggle from 'react-toggle';
import { OnlineHours } from '.';
import { IOnlineHour } from '../../../types';

type Props = {
  onChange: (name: 'onlineHours' | 'isOnline' | 'availabilityMethod' | 'timezone', value: string) => void;
  isOnline: boolean;
  availabilityMethod?: string;
  timezone?: string;
  onlineHours?: IOnlineHour[];
};

class Greeting extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onChangeFunction = this.onChangeFunction.bind(this);
  }

  onChangeFunction(name, value) {
    this.setState({ [name]: value });
    this.props.onChange(name, value);
  }

  render() {
    return (
      <FlexItem>
        <LeftItem>
          <FormGroup>
            <ControlLabel>Greeting message</ControlLabel>
            <p>{__("English")}</p>
            <FormControl
              type="text"
              value={this.props.timezone}
              onChange={(e) => 
                this.onChangeFunction('enGreetingMessage', (e.target as HTMLInputElement).value)}
            />
            <br />

            <p>{__("Mongolian")}</p>
            <FormControl
              type="text"
              value={this.props.timezone}
              onChange={(e) => 
                this.onChangeFunction('mnGreetingMessage', (e.target as HTMLInputElement).value)}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Greeting description</ControlLabel>
            <p>{__("English")}</p>
            <FormControl
              componentClass="textarea"
              value={this.props.timezone}
              onChange={(e) => 
                this.onChangeFunction('enGreetingDesc', (e.target as HTMLInputElement).value)}
            />
            <br />

            <p>{__("Mongolian")}</p>
            <FormControl
              componentClass="textarea"
              value={this.props.timezone}
              onChange={(e) => 
                this.onChangeFunction('mnGreetingDesc', (e.target as HTMLInputElement).value)}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Default language</ControlLabel>
            <FormControl
              componentClass="select"
              value={this.props.timezone}
              onChange={(e) => 
              this.onChangeFunction('validation', (e.currentTarget as HTMLInputElement).value)}
            >
                <option value="mn">{__("Mongolian")}</option>
                <option value="en">{__("English")}</option>
              </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Additional language</ControlLabel>
            <div>
              <Icon icon="add" /> Add language
            </div>
          </FormGroup>
        </LeftItem>
      </FlexItem>
    );
  }
}

export default Greeting;
