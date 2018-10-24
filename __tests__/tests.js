import React from 'react';
import { shallow, mount } from 'enzyme';
import AppMain from '../app/components/AppMain';
import Header from '../app/components/Header';
import Content from '../app/components/Content';
import Footer from '../app/components/Footer';

describe('The AppMain Component', () => {
  it('should render correctly', () => {
    const component = shallow(<AppMain />);

    expect(component).toMatchSnapshot();
  });
});

describe('The Header Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });

  it('renders a header title with the text HEADER', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('.header-title').text()).toEqual('HEADER');
  });
});

describe('The Content Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Content />);

    expect(component).toMatchSnapshot();
  });

  it('renders a header title with the text CONTENT', () => {
    const wrapper = mount(<Content />);
    expect(wrapper.text()).toEqual('CONTENT');
  });
});

describe('The Footer Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });

  it('renders a Footer title with the text FOOTER', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer').text()).toEqual('React Light Boilerplate v1.0');
  });
});
