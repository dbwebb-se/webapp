# Webapp api-referance

# `Users`

### GET /users/
Gets all the users

Resource URL `dbwebb.se/webapp/api/v1/users/`

### POST /users/
Creates a new user

Resource URL `dbwebb.se/webapp/api/v1/users/`

### GET /users/:username
Get all users matching usernamed passed

Resource URL `dbwebb.se/webapp/api/v1/users/:username`

#### Parameters
| Name        | Required | Example value    | Description | 
|:-----------:|:--------:|:----------------:|:------------|
| username | yes      | foiki | The name of the username to search for. |

# `Examples`

### GET /examples/
Returns all the avaliable examples.

Resource URL `dbwebb.se/webapp/api/v1/examples/`

### GET /examples/:exampleName
Retuns the given example as html.

Resource URL `dbwebb.se/webapp/api/v1/examples/:exampleName`

#### Parameters
| Name        | Required | Example value    | Description | 
|:-----------:|:--------:|:----------------:|:------------|
| exampleName | yes      | detectScreenSize | The name of the example to load. |
| type        | no       | json             | Get the content of the example as json. |

##### Example response `Content-Type text/html`
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>HTML5 APP</title>

    <!--Stylesheets-->
    <link rel="stylesheet" type="text/css" href="style/android.css" media="only screen and (max-width: 480px)">
    <link rel="stylesheet" type="text/css" href="style/desktop.css" media="screen and (min-width: 481px)">
    <link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">

    <!--App icon-->
    <link rel="apple-touch-icon-precomposed" href="image/myCustomIcon.png">

    <!--App capable-->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!--TOP bar black-->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--App viewport-->
    <meta name="viewport" content="minimal-ui, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

</head>
<body>
    <div id="content">
         <h1>Gestures</h1>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <script type="text/javascript" src="js/android.js"></script>
</body>
</html>
```

#### Example response `Content-Type application/json`
```json 
{
    "code": 200,
    "body": [
        "<div id=\"content\">\n<h1>Gestures</h1>\n</div>\n<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script>\n<script type=\"text/javascript\" src=\"https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js\"></script>\n<script type=\"text/javascript\" src=\"js/android.js\"></script>\n"
    ],
    "style": null,
    "styleSheets": [
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"style/android.css\" media=\"only screen and (max-width: 480px)\">",
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"style/desktop.css\" media=\"screen and (min-width: 481px)\">",
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css\">"
    ],
    "externJavascript": [
        "<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script>",
        "<script type=\"text/javascript\" src=\"https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js\"></script>",
        "<script type=\"text/javascript\" src=\"js/android.js\"></script>"
    ]
}
```


# `Views`

### GET /views/
Retuns all avaliable views.

Resource URL `dbwebb.se/webapp/api/v1/view/`

### GET /views/:name
Retuns the view of name given.

Resource URL `dbwebb.se/webapp/api/v1/view/uberView.html`

### Parameters
| Name | Required | Example value    | Description | 
|:----:|:--------:|:----------------:|:------------|
| name | yes      | uberView.html    | The name of the view to load. |
