# Frontend Platzi Master by Mariana Hernandez

Hi! I'm Mariana and I want to use this space to tell you how I resolved (or tried to) this challenge.

First of all it really was a huge challenge to me, since I have no experience with react nor any preprocessor, I had to watch a lot of videos and dedicate a lot of time in the first part of the project, but I'll talk about it later.

Overall, I enjoyed working on this, all of my knowledge in JS until now was purely theorical, and I had the chance to learn a lot more by practicing and bringing my design to reality, because that was something too; I had to think of my design as a single page application.

And here it is, please take a moment to read my process.

## Table of contents

- [Creating components](#Components)
- [Adding styles](#Styles)
- [Creating function getData.js](#getData)
- [API integration](#API)
- [Personalize API](#Personalize)
- [Document](Document)

## Components

<details>
  <summary>Original Structure</summary>
  <img src="./src/images/original-structure.jpg">
</details>

<details>
  <summary>The figma design</summary>
  <img src="./src/images/figma-design.jpg">
</details>

I used the image as a reference to build my design based on what was asked, I intended to make a clean design, so I used just typography as my main building method, and the yellow color as accent for links and important stuff.

I used:

- Semantic HTML5 markup
- Flexbox
- CSS Grid

## Styles

Even though I have never used any prepro', I really got to love this one

**JSX**

```jsx
<div className="header__container">
  <figure className="header__pic">
    <img src="{avatar}" alt="Mariana's avatar" />
  </figure>
  <div className="header__info">
    <h1>{name}</h1>
    <h2 className="info__profession">{profession}</h2>
    <div className="info__contact">
      <p>{phone}</p>
      <p>{email}</p>
    </div>
    <div className="info__social">
      <a href="{address}">Address</a>
      <a href="{website}">Github</a>
    </div>
  </div>
</div>
```

**Styl**

```styl
.header__container
  display flex
  flex-direction row
  align-items center
  justify-content center
  gap 12rem
  padding 10rem box-shadow 0px 0px 75px -35px
  rgba;
```

## getData

Not only I made a lot of research, but also had the help from my developer friends, so cheers to them 🎉.

This was my snippet for it

**JS**

```js
function getData(API) {
  return fetch(API)
    .then(res => res.json())
    .then(data => data);
}

export default getData;
```

## API

This is my snippet for it

**JSX**

```jsx
const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then(setData);
  }, []);
```

## Personalize

I would say this was the easiest part of the project. I used this plugging so I'll just mention it

- [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon)

## Document

Thank you for scrolling! Here is the final result.

<details>
  <summary>💻 Desktop view</summary>
  <img src="./src/images/desktop-view.png">
</details>

<details>
  <summary>📱 Mobile view</summary>
  <img src="./src/images/mobile-view.png">
</details>

<p align=center>Made with ♥ by themattfire</p>
