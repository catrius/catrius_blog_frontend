import { mount } from 'enzyme';
import React, * as ReactAll from 'react';
import faker from 'faker';
import ReactPaginate from 'react-paginate';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { DEVICES, RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import { mockDeviceContext } from 'test-utils';
import PaginatorContainer from 'containers/common/paginator-container';
import Paginator from 'components/common/paginator';


const mockStore = configureStore();

describe('PaginatorContainer', () => {
  it('should render Paginator with correct props', () => {
    const device = faker.random.arrayElement(DEVICES);
    mockDeviceContext(ReactAll, device);
    const pageCount = faker.random.number({ min: 1, max: 20 });
    const page = faker.random.number({ min: 1, max: pageCount });
    const state = {
      paginator: {
        pageCount,
      },
    };
    const store = mockStore(state);

    const wrapper = mount(
      <MemoryRouter initialEntries={ [`?page=${ page }`] }>
        <Provider store={ store }>
          <PaginatorContainer/>,
        </Provider>
      </MemoryRouter>,
    );

    const paginatorWrapper = wrapper.find(Paginator);
    expect(paginatorWrapper.prop('pageCount')).toEqual(pageCount);
    expect(paginatorWrapper.prop('page')).toEqual(page);

    const paginator = paginatorWrapper.find('.paginator-wrapper');
    expect(paginator.prop('className')).toEqual(`paginator-wrapper ${ RESPONSIVE_CLASS_NAMES[device] }`);

    const reactPaginate = paginator.find(ReactPaginate);
    expect(reactPaginate.prop('forcePage')).toEqual(page - 1);
    expect(reactPaginate.prop('pageCount')).toEqual(pageCount);
    expect(reactPaginate.prop('previousLabel')).toEqual('«');
    expect(reactPaginate.prop('nextLabel')).toEqual('»');
    expect(reactPaginate.prop('containerClassName')).toEqual('paginator');
    expect(reactPaginate.prop('pageClassName')).toEqual('page');
    expect(reactPaginate.prop('previousClassName')).toEqual('previous');
    expect(reactPaginate.prop('nextClassName')).toEqual('next');
    expect(reactPaginate.prop('breakClassName')).toEqual('break');
    expect(reactPaginate.prop('disabledClassName')).toEqual('disabled');
    expect(reactPaginate.prop('activeClassName')).toEqual('active');
    expect(reactPaginate.prop('pageLinkClassName')).toEqual('paginator-link');
    expect(reactPaginate.prop('previousLinkClassName')).toEqual('paginator-link');
    expect(reactPaginate.prop('nextLinkClassName')).toEqual('paginator-link');
    expect(reactPaginate.prop('breakLinkClassName')).toEqual('paginator-link');

    const hrefBuilder = reactPaginate.prop('hrefBuilder');
    expect(hrefBuilder(page)).toEqual(`?page=${ page }`);
  });
});
