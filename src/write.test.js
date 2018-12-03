import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import Write from './Write';

Enzyme.configure({ adapter: new Adapter() })

test('<Write/>', () => {
    let wrapper = shallow(<Write/>);
})
