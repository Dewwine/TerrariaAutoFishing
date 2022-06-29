import robot from 'robotjs';

const detectPosition = () => {
  const mouse = robot.getMousePos();

  const position = {
    x1: mouse.x - 150,
    y1: mouse.y - 100,
    x2: mouse.x + 150,
    y2: mouse.y + 80,
  };

  return position;
};

const clickMouse = () => {
  robot.mouseToggle("down");
  robot.mouseToggle("up");
};

export { detectPosition, clickMouse };
