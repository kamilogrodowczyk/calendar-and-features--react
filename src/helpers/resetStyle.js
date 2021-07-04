export const resetStyle = (ref, bgColor, fontColor, childrenCondition = '') => {
  if (!ref.current) return;
  const arr = [...ref.current.children];
  arr.forEach((el) => {
    if (childrenCondition) {
      if (el.children.length > childrenCondition) {
        el.style.backgroundColor = bgColor;
        el.style.color = fontColor;
      }
    } else {
      el.style.backgroundColor = bgColor;
      el.style.color = fontColor;
    }
  });
};
