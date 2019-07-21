import React from "react";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import App from "./App";
import Banner from "./Components/Banner";
import { config } from "./setupTests";

describe("Main Application", () => {
  describe("Application Container", () => {
    let component;
    beforeEach(() => {
      component = shallow(<App />);
    });
    it("should render the Application container without errors", () => {
      const AppWrapper = component.find(`[data-test="App"]`).length;
      expect(AppWrapper).toBe(1);
    });
    describe("Banner", () => {
      describe("checking prop types", () => {
        beforeEach(() => {
          const expectedProps = {
            title: "Testing Welcome World!",
            tempArr: [
              {
                fname: "Test Firstname",
                lname: "Test Lastname",
                email: "Test Email@gmail.com",
                age: 24,
                onlineStatus: false
              }
            ]
          };
          const propsErr = PropTypes.checkPropTypes(
            Banner.PropTypes,
            expectedProps,
            "props",
            Banner.name
          );
          expect(propsErr).toBeUndefined();
        });
        it("should not throw a warning", () => {});
      });
      describe("rendering", () => {
        describe("has props", () => {
          let BannerComponent;
          beforeEach(() => {
            const props = {
              title: "Testing Welcome World!"
            };
            BannerComponent = shallow(<Banner {...props} />);
          });
          it("should render an Banner Element", () => {
            const wrapper = BannerComponent.find(`[data-test="Banner"]`).length;
            expect(wrapper).toBe(1);
          });
          it("should render a Title Element", () => {
            const wrapper = BannerComponent.find(`[data-test="Title"]`).length;
            expect(wrapper).toBe(1);
          });
        });
        describe("has NO props", () => {
          let BannerComponent;
          beforeEach(() => {
            BannerComponent = shallow(<Banner />);
          });
          it("should NOT render a Banner Element", () => {
            const wrapper = BannerComponent.find(`[data-test="Banner"]`).length;
            expect(wrapper).toBe(0);
          });
          it("should NOT render a Title Element", () => {
            const wrapper = BannerComponent.find(`[data-test="Title"]`).length;
            expect(wrapper).toBe(0);
          });
        });
      });
    });
  });
});
