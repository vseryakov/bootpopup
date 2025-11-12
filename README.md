# Bootpopup

Popup dialog boxes for Bootstrap5.

See it in action in [Bootpopup - Examples](https://vseryakov.github.io/bootpopup/index.html).


_This project is a fork of https://rigon.github.io/bootpopup/_

## Content

- [Installation](#installation)
- [API](#api)
  - [bootpopup.alert](#bootpopupalertmessage-title-callback)
  - [bootpopup.confirm](#bootpopupconfirmmessage-title-callback)
  - [bootpopup.prompt](#bootpopuppromptlabel-type-message-title-callback) (single value)
  - [bootpopup.prompt](#bootpopuppromptlist_types-message-title-callback) (multiple values)
  - [bootpopup](#bootpopupoptions)
    - [About the buttons option](#about-the-buttons-option)
    - [About the content option](#about-the-content-option)
  - [bootpopup object](#bootpopup-object)
    - [Properties](#properties)
    - [Methods](#methods)
    - [DOM Elements](#dom-elements)
- [Build](#build)
- [Test locally](#test-locally)
- [Examples](#examples)

## Installation

### npm

```bash
npm install bootpopup5
```

### cdn

```html
<script src="https://unpkg.com/bootpopup5@1.x.x/dist/bootpopup.min.js"></script>
```

### git

    git clone https://github.com/vseryakov/bootpopup.git

## API

### `bootpopup.alert(message[, callback])`
  
Shows an alert dialog box.
**Return:** instance of Bootpopup window

- **message**:
  - `(string)` message of the alert
- **callback**:
  - `(function)()` callback when the alert is dismissed


### `bootpopup.confirm(message[, callback])`

Shows a confirm dialog box.
**Return:** instance of Bootpopup window

- **message**:
  - `(string)` message to confirm
- **callback**:
  - `(function)(answer)` callback when the confirm is answered. `answer` will be `true` if the answer was yes and `false` if it was no. If dismissed, the default answer is no


### `bootpopup.prompt(label[, callback])`

Shows a prompt dialog box, asking to input a single value.
**Return:** instance of Bootpopup window

- **label**:
  - `(string)` label of the value being asked
- **callback**:
  - `(function)(answer)` callback with the introduced data. This is only called when OK is pressed


### `bootpopup(options)`

Shows a customized dialog box. `bootpopup.alert`, `bootpopup.confirm` and `bootpopup.prompt` are mapped into this function.
**Return:** instance of Bootpopup window

**Options:** `(object)`

| Name        | Type     | Default          | Example             | Description
|-------------|----------|------------------|---------------------|------------
| title       | string   | `document.title` | `"A title"`         | Title of the dialog box
| show_close  | boolean  | `true`           | `false`             | Show or not the close button in the title
| show_header | boolean  | `true`           | `false`             | Show or not the dialog header with title
| show_footer | boolean  | `true`           | `false`             | Show or not the dialog footer with buttons
| keyboard    | boolean  | `true`           | `false`             | If false disable closing the modal with keyboard
| backdrop    | boolean  | `true`           | `false`             | If false disable modal backdrop, see [Options](https://getbootstrap.com/docs/5.3/components/modal/#options), can be `static` as well
| scroll      | boolean  | `true`           | `false`             | Apply `modal-dialog-scrollable` if true
| center      | boolean  | `false`          | `true`              | Apply `modal-dialog-centered` if true
| horizontal  | boolean  | `false`          | `true`              | Enable/disable horizontal layout in the form element. Learn more [Forms](https://getbootstrap.com/docs/5.3/forms/layout/)
| content     | array    | `[]`             | `[ {p}, {p} ]`      | Content of the dialog box. Learn more [about the content option](#about-the-content-option)
| footer      | array    | `[]`             | `[ {p}, {p} ]`      | Content to show inside the modal footer, similar to the content but only supports simple elements
| size        | string   | ``               | `lg`                | Size of the modal window. Values accepted: `sm`, ``, `lg`, `xl` ([Bootstrap Modal optional sizes](https://getbootstrap.com/docs/5.3/components/modal/#optional-sizes))
| size_label  | string   | `col-sm-4`       | `col-lg-2`          | Any class name or list of classes to apply to labels in the form. Preferably classes from [Bootstrap Grid system](https://getbootstrap.com/docs/5.3/layout/grid/)
| size_input  | string   | `col-sm-8`       | `col-lg-10`         | Any class name or list of classes to apply to inputs (div that wraps the input) in the form. Preferably classes from [Bootstrap Grid system](https://getbootstrap.com/docs/5.3/css/#grid)
| onsubmit    | string   | `close`          | `ok`                | Default action to be executed when the form is submitted. This is override if you define a callback for `submit`. The possible options are: `close`, `ok`, `cancel`, `yes`, `no`.
| buttons     | array    | `["close"]`      | `[ "yes", "no"]`    | List of buttons to show in the bottom of the dialog box. The possible options are: `close`, `ok`, `cancel`, `yes`, `no`. Learn more [about the buttons option](#about-the-buttons-option)
| before      | function | `function() {}`  | `function(popup) {}`| Called before the window is shown, but after being created. `popup` provides the instance to `bootpopup` object
| dismiss     | function | `function() {}`  | `function(data) {}` | Called when the window is dismissed
| submit      | function | `function() {}`  | `function(data) {}` | Called when the form is submitted. Returning `false` will cancel submission
| close       | function | `function() {}`  | `function(data) {}` | Called when Close button is selected
| ok          | function | `function() {}`  | `function(data) {}` | Called when OK button is selected
| cancel      | function | `function() {}`  | `function(data) {}` | Called when Cancel button is selected
| yes         | function | `function() {}`  | `function(data) {}` | Called when Yes button is selected
| no          | function | `function() {}`  | `function(data) {}` | Called when No button is selected
| complete    | function | `function() {}`  | `function(data) {}` | This function is always called when the dialog box has completed
| alert       | boolean  | `false`          | `true`              | If true adds an alert element to be shown by `showAlert`
| info        | boolean  | `false`          | `true`              | If true adds an info element to be shown by `showAlert(msg, { type: "info"})`
| autofocus   | boolean  | `true`           | `false`             | If true focus on the first input element when shown
| empty       | boolean  | `false`          | `true`              | If true return all input values even if empty, default is to return only non-empty values in by the `data()` method
| sanitizer   | function | `null`           | `function(html) {}` | Called when rendering HTML content or labels, must return a list of HTMLElements to be appended
| tabs        | object   | `null`           | `{ id: Label,..}`   | An object with tab id and label, a `nav-tabs` will be shown above the form, elements in the content now can be assigned to a tab by setting property `tab_id` to any tab id from the object.
| self        | object   | `bootpopup`      | `this`             | Pass a context to use for callback functions, default is the popup object.
| debug       | boolean  | `false`          | `true`             | Log input values in the console
| class_modal | `string` | `modal fade`     | `modal mt-5`       | Change default modal class, see [Modal](https://getbootstrap.com/docs/5.3/components/modal/#modal-components)
| class_dialog | `string` | `modal-dialog`  | `modal-dialog mt-5` | Change default modal dialog class
| class_title | `string` | `modal-title`  |  `modal-title text-break` | Change default modal title class
| class_content | `string` | `modal-content | `modal-content bg-light` | Change default modal content class
| class_body | `string` | `modal-body` | `modal-body p-0` | Change default modal body class
| class_header | `string` | `modal-header` | `modal-header w-100 text-center` | Change default modal header class
| class_footer | `string` | `modal-footer` | `modal-footer justify-content-center` | Change default modal footer class
| class_options | `string` | `options flex-grow-1 text-start` | `options` | Wrapper class for the footer content
| class_alert | `string` | `alert alert-danger fade show` | `alert alert-warning` | Class for popup alerts shown by `showAlert`
| class_info | `string` | `alert alert-info fade show | `alert alert-info` | Class to show info alerts by `showAlert`
| class_form | `string` | `` | `d-flex flex-column` | Class for the form wrapper div
| class_buttons | `string` | `btn` | `btn btn-sm` | Default base class for all buttons
| class_button | `string` | `btn-outline-secondary` | `btn-primary` | Default style class for buttons, appended to class_buttons
| class_ok | `string` | `btn-primary` | `` | Style class for the ok button
| class_yes | `string` | `btn-primary` | `` | Style class for the yes button
| class_no | `string` | `btn-secondary` | `` | Style class for the no button
| class_cancel: "btn-outline-secondary` | `` | Style class for the cancel button
| class_close | `string` | `btn-outline-secondary` | `` | Style class for the close button
| class_tabs | `string` | `nav nav-tabs mb-4` | `` | Default class for the tab nav
| class_tablink | `string` | `nav-link` | `` | Default class for the tab links
| class_tabcontent | `string` | `tab-content` | `` | Default class for the tab content div
| class_group | `string` | `row mb-3` | `form-group row mb-0` | Change group class, each element is wrapped by a div (group)
| class_label | `string` | `` | `fs-5` | Class to append to the form labels in addition to `form-label/col-form-label`
| class_row | `string` | `row` | `row py-3` | Class to use for content type `row`
| class_col | `string` | `col-auto` | Class to use for columns in the `row` content item
| class_suffix | `string` | `form-text text-muted text-end` | `w-100 p-1 text-center` | Class to use for content added to the group
| class_input_button | `string` | `btn btn-outline-secondary` | `` | Default class for the text_input_button
| class_list_button | `string` | `btn btn-outline-secondary dropdown-toggle` | `` | Default class for the list_input_button button
| class_input_menu | `string` | `dropdown-menu bg-light` | `` | Default class for the list_input_button dropdown
| list_input_mh | `string` | `25vh` | `50vh` | Default max height of the dropdown in the `list_input_button` element


#### About the **buttons** option:

In addition to default buttons `ok, close, cancel, yes, no` a button can be defined in ad-hoc manner with any label as long as the
button callback is named the same, for example

  ```javascript
       bootpopup({
         ...
         buttons: ["cancel", "Order"],
         Order: (data) => {
             ...
         }
       }
  ```

  Clicking on the `Order` button will call the Order callback.

  Customizing default button labels can be done via `text_NAME` properties, for example

  ```javascript
  bootpopup({
    buttons:["ok","cancel"],
    text_ok: "Submit",
  })
  ```

  Now ok will be shown as Submit. With ad-hoc labeling this is not very useful but still can be used for default buttons.


#### About the **content** option:

The biggest flexibility of Bootpopup is the `content` option. The content is wrapped by a form allowing to create complex forms very quickly. When you are submitting data via a dialog box, Bootpopup will grab all that data and deliver to you through the callbacks.

1. `content` is an array of objects and each object is represented as an entry of the form. For example, if you
   have the following object:
   
   ```javascript
   { p: {class: "bold", text: "Insert data:"}}
   ```
   
   This will add a `<p></p>` tag to the form. The options of `p` (`{class: "bold", text: "Insert data:"}`) are HTML
   attributes passed to the HTML tag. There is a special attribute for `text` which is defined as the inner text of
   the HTML tag. So, this example is equivalent to the following HTML:
   
   ```html
   <p class="bold">Insert data:</p>
   ```

2. But it is when it comes to adding inputs that things become easy. Look at this example:
   
   ```javascript
   { input: {type: "text", label: "Title", name: "title", placeholder: "Description" }}
   ```
   
   This will create an `input` element with the attributes `type: "text", label: "Title", name: "title", placeholder: "Description"`.
   Note there is also a special attribute `label`. This attribute is used by Bootpopup to create a label for the input form entry.
   The above example is equivalent to the following HTML:
   
   ```html
   <div class="form-group mb-3">
     <label for="title" class="col-form-label col-sm-4">Title</label>
     <div class="col-sm-10">
       <input label="Title" name="title" id="title" placeholder="Description" class="form-control" type="text">
     </div>
   </div>
   ```
   
3. In order to make it even simpler, there are shortcuts for most common input types:
   `"text", "color", "url", "password", "hidden", "file", "number",
    "email", "reset", "date", "time", "checkbox", "radio", "datetime-local",
    "week", "tel", "search", "range", "month", "image", "button"`.

   The previous example can be simply written as:
   
   ```javascript
   { text: {label: "Title", name: "title", placeholder: "Description" }}
   ```

4. `select`, `checkboxes` and `radios` have a special attribute named `options`. You can specify a list of options to be shown in 2 formats:
     - an object where the key is used as value by the input and the value is the text displayed
     - a list of objects with { label:, value:, name: } properties

   ```javascript
   { select: { label: "Select", name: "select", options: { a:"A", b:"B", c:"C" }}}
   { radios: { label: "Radios", name: "radios", options: { a:"A", b:"B", c:"C" }}}
   { checkboxes: { label: "Checkboxes", options: [ { name: "c1", label: "A" }, { name: "c2", label: "C", value: 2 } ]}}
   ```
   
   `select` with attribute `multiple` is also supported. For multi-select to make an item selected the value must match or property selected must be true in case of objects: `{ name: .., value:.., selected: true }`

5. Another useful feature is the ability to support functions directly as an attribute. Take the following `button` example:
   
   ```javascript
   { button: {name: "button", value: "Open image", class: "btn btn-info", click: (event) => {
       console.log(event);
       bootpopup.alert("Hi there");
   }}}
   ```
   This will create a `onclick` event for the button. The reference for the object is passed as argument to the function.

6. You can also insert HTML strings directly. Instead of writing an JS object, write the HTML:

   ```javascript
   '<p class="lead">Popup dialog boxes for Bootstrap.</p>'
   ```

7. List of special element properties:
   - `class` - to customize the style of the element just provide all classes in the `class` property, if empty `form-control` is set
   - `text` - set element's `textContent`
   - `html` - parse and add DOM elements after running thru sanitizer
   - `autofocus` - make this element focused on show
   - `nosanitize` - skip sanitizer for labels or html property if installed
   - `floating` - add `form-floating` to the group to make labels floating
   - `checked` - true to make checkbox/radios selected
   - `switch` - true to convert a checkbox into a toggle style
   - `inline` - true to add `form-check-inline` to a checkbox style
   - `reverse` - true to add `form-check-reverse` to checkbox style
   - `input_label` - checkbox/radio specific label instead of the element's label
   - `class_input_btn` - convert checkbox into a button style, must be one of btn- classes
   - `class_check` - add custom class to checkbox/radio element
   - `class_label` - to customize the label style, added to the default `form-label`
   - `attrs_label` - attributes for the label element, an object
   - `size_label` - set column width for the label
   - `size_input` - set column width for the input
   - `class_group` - to customize the group, example: `{ class_group: "row my-3 py-1 border-bottom" }` to set border and gaps for an element
   - `attrs_group` - attributes for the group div, an object, example: `{ attrs_group: { id: "group1" } }`
   - `class_prefix` and/or `text_prefix` - add as a first span to the group with a span with class/text
   - `class_suffix` and/or `text_suffix` - make it the last div in the group with class/text
   - `text_valid`, `text_invalid` - add divs for valid or invalid feedback, to be used with `validate` method
   - `class_append` and/or `text_append` - append a span to an element, mostly for non-input entries
   - `text_input_button` - add a button the element to perform an action on it, `data-formid` and `data-inputid` are set on the button with form and the input element ids for easy access in the callbacks, use `class_input_button` to change the button style, use `class_input_group` to change the input group style
   - `attrs_input_button` - attributes to the input button, an object, usually `{ click: (ev) => {} }`
   - `list_input_button` or `list_input_tags` - add a dropdown button with options to select and place into an input, use `class_list_button` to change the button style, use `class_input_group` to change the input group style, use `class_input_menu` to change the dropdown menu style, the list can be an Array of strings or objects `{ name:, value: }`. The `list_input_tags` adds a selected value in the list.



### `bootpopup` object

The `bootpopup` object is returned every time a new instance of Bootpopup is created.

#### Properties

- `formid` - HTML ID of the form, this is a randomly generated
- `options` - list of options used to create the window

#### Methods

 - `addOptions` - add options to the current options
 - `create` - create the window and add it to DOM, but not show
 - `show` - show window and call `before` callback
 - `showAlert(msg, options)` - show an alert inside the popup, requires `alert` property
    - `options.type` - `info` to show information message, requires `info` property
    - `options.dismiss` - if set the message must be closed manually
    - `options.delay` - auto hide after this delay in ms
 - `escape(str)` - convert `&<>'"` into HTML entities
 - `close` - close popup window, i.e. call the `close` action
 - `data` - return form input as an  object `{ obj: {}, list: [] }` with all values from all inputs
 - `validate` - run `checkValidity` and return the result
 - `callback(name)` - call a callback for the given action and return the result:
   - `dismiss` - perform a `dismiss`
   - `submit` - performs a `submit`
   - `close` - performs a `close`
   - `ok` - performs a `ok`
   - `cancel` - performs a `cancel`
   - `yes` - performs a `yes`
   - `no` - performs a `no`

#### DOM elements

All the following Bootpopup properties are native HTML elements:

- `modal` - entire window, including the fade background. You can use this property in the same way as described in [Bootstrap Modals Usage](https://getbootstrap.com/docs/javascript/#modals-usage)
- `dialog` - entire window, without the background
- `content` - content of the dialog
- `header` - header of the dialog
- `body` - body of the dialog
- `form` - main form in the dialog, inside the `body`
- `footer` - footer of the dialog

##### Buttons

- `btn_close` - close button (if present)
- `btn_ok` - OK button (if present)
- `btn_cancel` - cancel button (if present)
- `btn_yes` - yes button (if present)
- `btn_no` - no button (if present)

Any ad-hoc button will be added in the form `btn_Label`.

NOTE: All actions by default close the popup window, a callback must return `null` in order to keep the popup window
visible, this is useful when validating the input. Manually closing the popup is done via the `close` method.

## Build

In order to build a version for distribution, please run:

    npm install
    npm run build

The output files are in the dist/ folder for both CDN and import usage.


## Test locally

Please run:

    npm install
    npm run watch

Now, you can open http://localhost:8000/


## Examples

Open `index.html` to see the library in action.

- Alert:

  ```javascript
  bootpopup.alert("Hi there");
  ```

- Confirm:

  ```javascript
  bootpopup.confirm("Do you confirm this message?", (yes) => {
    alert(yes);
  });
  ```

- Prompt:

  ```javascript		
  bootpopup.prompt("Name", (value) => {
    alert(value);
  });
  ```

- Customized prompt:

  ```javascript
  bootpopup({
      title: "Add image",
      content: [
          '<p class="lead">Add an image</p>',
          { p: {text: "Insert image info here:"}},
          { input: {type: "text", label: "Title", name: "title", placeholder: "Description for image"}},
          { input: {type: "text", label: "Link", name: "link", placeholder: "Hyperlink for image"}}],
      buttons: ["ok", "cancel"],
      cancel: () => { alert("Cancel") },
      ok: (data, list) => { console.log(data, list) },
      complete: () => { alert("complete") },
  });
  ```

- Validation:

  ```javascript
  var popup = bootpopup({
      title: "Add details",
      alert: 1,
      content: [
          { text: { label: "Name", name: "title", placeholder: "your name"}},
          { number: { label: "Age", name: "age", placeholder: "your age"}}],
      buttons: ["ok", "cancel"],
      text_ok: "Verify",
      ok: (data) => {
          if (!data.name) return popup.showAlert("name is required")
      },
  });
  ```

See more [Examples](https://vseryakov.github.io/bootpopup/index.html).

# Author

Vlad Seryakov
