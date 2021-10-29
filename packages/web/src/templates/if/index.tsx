const If = (props: { test: boolean; children }) =>
  props.test ? props.children : false

export default If
