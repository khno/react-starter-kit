import React from "react";
import { shallow } from "enzyme";

// 引入被测试组件
import Form from "../components/Form";

// case1 测试组件是否正常渲染
// 通过查找存在 input 和 button,测试组件正常渲染
describe("FormView", () => {
  it("Form Component should be render", () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.find("input").exists()).toBeTruthy();
  });
});

// case2 测试组件点击事件是否能正常执行
describe("executes a handler function on button", () => {
  const mockEvent = {
    onSubmit: jest.fn()
  };

  it("Onsubmit works", () => {
    // 通过 shallow
    const wrapper = shallow(<Form onSubmit={mockEvent.onSubmit} />);
    // 通过 find 查找 button
    const button = wrapper.find("button");
    // 模拟提交
    button.simulate("click");
    expect(mockEvent.onSubmit).toBeCalled();
  });
});
