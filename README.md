# Coming soon

A simple project using ReactJS with a 3D animated countdown components by @leenguyen.

![image](https://github.com/ricichien/react-coming-soon/assets/85197053/7fecca69-bdce-4a31-a1f1-34130fc6391f)

## Stack and Tools
* [React](https://reactjs.org/)

# react-flip-clock-countdown

> A 3D animated countdown component for React.

[![NPM](https://img.shields.io/npm/v/@leenguyen/react-flip-clock-countdown.svg)](https://www.npmjs.com/package/@leenguyen/react-flip-clock-countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<div align="center">
  <img src="./resources/demo.gif" alt="react flip clock countdown demo" width="500" />
</div>

## Install

```bash
npm install --save @leenguyen/react-flip-clock-countdown
```

Or

```bash
yarn add @leenguyen/react-flip-clock-countdown
```

#### Custom styles via css

```tsx
import 'styles.css';

class Example extends Component {
  render() {
    return <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} className='flip-clock' />;
  }
}
```

```css
/* styles.css */

.flip-clock {
  --fcc-flip-duration: 0.5s; /* transition duration when flip card */
  --fcc-digit-block-width: 40px; /* width of digit card */
  --fcc-digit-block-height: 60px; /* height of digit card, highly recommend in even number */
  --fcc-digit-font-size: 30px; /* font size of digit */
  --fcc-digit-color: white; /* color of digit */
  --fcc-label-font-size: 10px; /* font size of label */
  --fcc-label-color: #ffffff; /* color of label */
  --fcc-background: black; /* background of digit card */
  --fcc-divider-color: white; /* color of divider */
  --fcc-divider-height: 1px; /* height of divider */
  --fcc-separator-size: 6px; /* size of colon */
  --fcc-separator-color: red; /* color of colon */
}
```

#### Custom section to be rendered

In case you don't want to display the date, use `renderMap` to custom render state of each section

```tsx
class Example extends Component {
  render() {
    return (
      <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} renderMap={[false, true, true, true]}>
        Finished
      </FlipClockCountdown>
    );
  }
}
```
