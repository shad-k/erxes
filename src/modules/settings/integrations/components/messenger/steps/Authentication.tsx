import {
  ControlLabel,
  FormControl,
  FormGroup
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

class Authentication extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onChangeFunction = this.onChangeFunction.bind(this);
  }

  onChangeFunction(name: any, value: string) {
    this.setState({ [name]: value });
    this.props.onChange(name, value);
  }

  render() {
    return (
      <FlexItem>
        <LeftItem>
          <FormGroup>
            <FormControl
              value="manual"
              componentClass="radio"
              checked={this.props.availabilityMethod === 'manual'}
              onChange={e => {
                const target = e.currentTarget as HTMLInputElement;
                return this.onChangeFunction('availabilityMethod', target.value)
              }}
              inline
            >
              {__('Not require')}
            </FormControl>

            <FormControl
              value="auto"
              componentClass="radio"
              checked={this.props.availabilityMethod === 'auto'}
              onChange={e => {
                const target = e.currentTarget as HTMLInputElement;
                this.onChangeFunction('availabilityMethod', target.value)
              }}
              inline
            >
              {__('Require')}
            </FormControl>
          </FormGroup>
          
          <FormGroup>
            <ControlLabel>Authentication title</ControlLabel>
            <FormControl
              type="text"
              value=''
              onChange={e => 
                this.onChangeFunction('authenticationTitle', (e.currentTarget as HTMLInputElement).value)}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Authentication description</ControlLabel>
            <FormControl
              type="text"
              value={this.props.timezone}
              onChange={(e) => 
                this.onChangeFunction('authenticationDescription', (e.currentTarget as HTMLInputElement).value)}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Type</ControlLabel>
            <FormControl
              componentClass="select"
              value={this.props.timezone}
              onChange={(e) => 
              this.onChangeFunction('type', (e.currentTarget as HTMLInputElement).value)}
            >
                <option />
                <option value="input">{__("Input")}</option>
                <option value="textarea">{__("Text area")}</option>
                <option value="select">{__("Select")}</option>
                <option value="check">{__("Checkbox")}</option>
                <option value="radio">{__("Radio button")}</option>
                <option value="phone">{__("Phone")}</option>
                <option value="email">{__("Email")}</option>
                <option value="firstName">{__("First name")}</option>
                <option value="lastName">{__("Last name")}</option>
                <option value="companyName">{__("Company Name")}</option>
                <option value="companyEmail">{__("Company Email")}</option>
                <option value="companyPhone">{__("Company Phone")}</option>
              </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Validation</ControlLabel>
            <FormControl
              componentClass="select"
              value={this.props.timezone}
              onChange={(e) => 
              this.onChangeFunction('validation', (e.currentTarget as HTMLInputElement).value)}
            >
                <option />
                <option value="email">{__("Email")}</option>
                <option value="number">{__("Number")}</option>
                <option value="date">{__("Date")}</option>
                <option value="phone">{__("Phone")}</option>
              </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Text:</ControlLabel>
            <FormControl
              type="text"
              value={""}
              onChange={e =>
                this.onChangeFunction("text", (e.currentTarget as HTMLInputElement).value)
              }
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Description:</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={""}
              onChange={e =>
                this.onChangeFunction("description", (e.currentTarget as HTMLInputElement).value)
              }
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>{__("Button text")}</ControlLabel>
            <FormControl
              value={this.props.timezone}
              onChange={e =>
                this.onChangeFunction("btnText", (e.currentTarget as HTMLInputElement).value)
              }
            />
          </FormGroup>
        </LeftItem>
      </FlexItem>
    );
  }
}

export default Authentication;
