# React Project Refresher

Your task is to build an app which lists information on the planets in our solar system. 🪐

## Pre lecture Tasks:

1. Use the following wireframe to plan your app. Consider the different components this app would be made of; think of which we could make reusable. Eventually the planet data will update so we'll probably want to hold it in state. Sketch out a component tree diagram to help illustrate your decisions.

<img src="wireframe.jpg" alt="react app wireframe" style="width:300px;"/>

2. Using your plan, build up your individual components. You can use the following fake data to initialise your state. Don't worry about updating it just yet.

```js
[
	{
		planet_id: 1,
		planet_name: "planet a",
		au_from_sun: "1",
		type: "gas",
		moon_count: "0",
	},
	{
		planet_id: 2,
		planet_name: "planet b",
		au_from_sun: "2",
		type: "rock",
		moon_count: "4",
	},
];
```

You do not need to consider CSS right now, just ensure you are able _hydrate_ your components with the data provided.

**Further Task**

3. Think about how you might choose to display the data. Presenting information to a user as `label:value` like depicted in the wireframe is not very inspiring. Think about how you might make the content more engaging. This [article](https://www.refactoringui.com/previews/labels-are-a-last-resort) is a very good read on how to refactor the UI. You can consider using CSS here.
