import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot'; //unconnected version

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  const props = {
    balance: 0,
    bitcoin: {}
  };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method it receive from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});
