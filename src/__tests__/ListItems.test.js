import React from "react";
import { shallow } from "enzyme";

// 引入被测试组件
import ListItems from "../components/ListItems";

// case1 测试组件是否正常渲染
describe("ListItemsView", () => {
  it("ListItemsView Component should be render", () => {
    const setup = () => {
      // 模拟 props
      const props = {
        items: [1]
      };

      // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
      const wrapper = shallow(<ListItems {...props} />);
      return {
        props,
        wrapper
      };
    };

    const { wrapper, props } = setup();
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find("li").exists()).toBeTruthy();
  });
});