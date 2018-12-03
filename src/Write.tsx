import * as React from 'react';
import { observer } from 'mobx-react';
import { Store, Views } from './Store';

@observer
class Write extends React.Component<{store: Store}, {}> {
  render() {
    return <div>Hello</div>;
  }
}

export default Write;