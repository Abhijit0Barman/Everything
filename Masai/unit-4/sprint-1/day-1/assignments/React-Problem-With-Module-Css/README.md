## React-Problem-With-Module-css

### Submission Instructions [Please note]

#### Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ App component has the correct heading and using module.css for styling - 1 mark
✅ MobileInfo has correct headings in h1 tags and using module.css for styling for heading and container - 1 mark
✅ MobileInfo component contains all the data as mentioned in the problem statement - 1 mark
✅ Courses component has correct headings and using module.css for styling heading and container - 1 mark
✅ Courses component has all the data as per the problem statement - 1 mark
✅ Users component is having heading and styling is done for them using module.css - 1 mark
✅ Users component is showing all the data as per the problem statement - 1 mark
✅ Follow button on clicking showing alert with the correct message - 2 mark

```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
  try to keep one submission at a time

## Problem Statement:

- Your task is to create a React application that displays information about mobile devices, courses, and users.

## Folder Structure

```
    -src
      |--->App.jsx
      |--->App.module.css
      |--->Components
          +---courses
          |       Courses.jsx
          |       Courses.module.css
          +---mobileInfo
          |       MobileInfo.jsx
          |       MobileInfo.module.css
          +---users
                  UserCard.jsx
                  Users.jsx
                  Users.module.css
```

### App

<div>
<img src="https://i.imgur.com/t5O33iw.png" width="100%">
</div>

- This component serves as the main wrapper for the entire application.
- It should display a heading and import three child components: MobileInfo, Courses, and Users.
- The heading should be in the `h1` tag with the text content `This app contains different components like MobileInfo, Courses, Users`.
  - <p style="color:red">After importing display the components also in the same order as above, ie. 1. MobileInfo, 2. Courses, 3. Users </p>
- The heading should be styled using CSS modules with a `blue` color.
- While writing in the module.css file use className as `heading` to give `blue` color to the `heading`.

### MobileInfo

<div>
<img src="https://i.imgur.com/WXcM1rK.png" width="100%">
</div>

- This component should display two headings in `h1` tags, `Mobile Operating System` and `Mobile Manufacturers` followed by unordered lists containing respective data.
- The unordered lists under `Mobile Operating System` should contain the `li` with the following text contents.
  - Android, Blackberry, iPhone, Windows Phone
- The unordered lists under `Mobile Manufacturers` should contain the `li` with the following text contents.
  - Samsung, HTC, Micromax, Apple
- The order of `li` tags should be the same as the above order in which text Contents are provided.
- The component should be styled using `CSS modules` with `color` as `red` for the headings(`h1` tags) and a `border` as `red` around the container. Use className as `heading` for headings and `container` for `div` with `data-testid="mobile_info"`(As this is a container for this component) as `classNames` when you writing css in the module.css file.

### Courses

<div>
<img src="https://i.imgur.com/lD23BJF.png" width="100%">
</div>

- This component should display information about full-time and part-time courses.
- For each type of course, display a heading(in h2 `tag`) and an ordered list with details about eligibility and duration.

  - There are two courses.

    - `Full Time Courses` and `Part Time Courses` in `h2` tags.

      - Below `h2` tag of `Full Time Courses` there should be `ol` tag.

        - The `ol` tag should contain a `li` tag with text content as `Full Stack Web Development`
          - Now the above `li` tag will also contain a child element `ul` tag.
            - the above `ul` tag should contain `Eligibility` and `Duration` of the course in `li` tags with the following text contents.
              - `Eligibility : 18-28 yrs`
              - `Duration : 30 weeks`

      - Below `h2` tag of `Part Time Courses` there should be `ol` tag.
        - The `ol` tag should contain two `li` tags.
          - First `li` should contain the text Contain `Full Stack Web Development`
            - Now the above `li` tag will also contain a child element `ul` tag.
            - the above `ul` tag should contain `Eligibility` and `Duration` of the course in `li` tags with the following text contents.
              - `Eligibility : 18-28 yrs`
              - `Duration : 30 weeks`
          - Second `li` should contain text content `Data Analytics`
            - Now the above `li` tag will also contain a child element `ul` tag.
            - the above `ul` tag should contain `Eligibility` and `Duration` of the course in `li` tags with the following text contents.
              - `Eligibility : 18-28 yrs`
              - `Duration : 30 weeks`

- Style the component using CSS modules with a `green` color for the headings(`h2` tags) and a `border` as `green` around the container. And use `heading` for heading and `wrapper` for `div` with `data-testid="mobile_info"`(this is the container for this component) as `classNames` when you write css in the module.css file.

### Users

<div>
<img src="https://i.imgur.com/qzhtT5T.png" width="100%">
</div>

- This component will consist of a heading in `h3` tag and with text content as `Users List`
- This component should also display a list of `users`.(users list will be included in boilerplate)
- Each `user` should be represented by a `UserCard` component.
- The Users component should be styled using CSS modules with a `teal color` for the `heading` and a `teal border` around the container.
- use `heading` as a className for `heading` and `container` as a className for the `div` with `data-testid="users"` (this is the `container` of this component) while writing in module.css file.

### UserCard

<div>
<img src="https://i.imgur.com/xxY0raG.png" width="100%">
</div>

- This component should receive user data as props and display the details of the users with the help of the following HTML elements.

  - avatar (in `img` tag)
  - user's name(in `h2` tag with `data-testid="user_name"` as attribute)
  - address(in `p` tag with `data-testid="user_address"` as attribute)
  - There should be an `h3` with `Posts` as text content
  - no of `posts` (in `p` tag with `data-testid="user_posts"` as an attribute)
  - There should be an `h3` with `Followers` as text content
  - no of `followers`(in `p` tag with `data-testid="user_followers"` as attribute)
  - There should be an `h3` tag with the text content `Married`
  - if the person is married there should be text content as `Yes` or else `No` in `p` tag with the attribute as `data-testid="is-married"`.
  - there should be a `button` with text content as `Follow` on clicking on it we should get an alert `You are now following ${name}` where `name` is the name of the `user` you are following.

<div>
<img src="https://i.imgur.com/7sDHCYb.png" width="100%">
</div>

- Follow the requirements mentioned above to create the structure and styling of the components. Make sure to follow the best practices for using CSS modules, writing concise and maintainable code, and using React component composition.
- Ensure that your application is fully functional and responsive. Test your components thoroughly to validate their behavior and appearance.

#### Note

<ol style="color:red">
<li>Dont change the order of the HTML element, for reference go throught the snapshot</li>
<li >Use the respective **module.css files to write the CSS. If you use the inline style then your code will not be accepted for some test cases even though you can achieve the same layout</li>
<li>Use classNames as mentioned in the problem statement while writing in module.css</li>
<li> Don't use inline styles or create additional files for CSS. Doing this may lead to zero marks</li>
</ol>

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.

**The problem is tested on CP**

<div>
<img src="https://i.imgur.com/DMOmr8c.png" width="100%">
</div>

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
