define({ "api": [
  {
    "type": "get",
    "url": "/photos/tags",
    "title": "browse all tags",
    "name": "browseTags",
    "group": "photosHelpers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[Tag]",
            "optional": false,
            "field": "data",
            "description": "<p>list of tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "output example",
          "content": "[\n\"tag1\", \"tag2\", \"tag3\", \"tag4\", ....\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photosHelpers"
  },
  {
    "type": "get",
    "url": "/photos//countries",
    "title": "Get all countries",
    "name": "getAllCountries",
    "group": "photosHelpers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>all countries as array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "countries",
          "content": "[\n{\n    \"id\": 0,\n    \"code\": \"AF\",\n    \"name\": \"Afghanistan\"\n},\n{\n    \"id\": 1,\n    \"code\": \"AL\",\n    \"name\": \"Albania\"\n},\n{\n    \"id\": 2,\n    \"code\": \"DZ\",\n    \"name\": \"Algeria\"\n},\n{\n    \"id\": 3,\n    \"code\": \"AS\",\n    \"name\": \"American Samoa\"\n},\n{\n    \"id\": 4,\n    \"code\": \"AD\",\n    \"name\": \"Andorra\"\n},\n{\n    \"id\": 5,\n    \"code\": \"AO\",\n    \"name\": \"Angola\"\n},\n{\n    \"id\": 6,\n    \"code\": \"AI\",\n    \"name\": \"Anguilla\"\n},\n{\n    \"id\": 7,\n    \"code\": \"AQ\",\n    \"name\": \"Antarctica\"\n}\n....\n]",
          "type": "array"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photosHelpers"
  },
  {
    "type": "post",
    "url": "/photos/browse/",
    "title": "browse approved photos (public)",
    "name": "browsePhotos",
    "group": "photos",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": true,
            "field": "photoId",
            "description": "<p>view specific photoId (optional)</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>search in title</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "filter",
            "description": "<p>by photoStatus ['metas', 'submitted', 'rejected-metas', 'rejected-photo', 'approved']</p>"
          },
          {
            "group": "body",
            "type": "[String]",
            "optional": true,
            "field": "tags",
            "description": "<p>filter by a list of tags, must send as array</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "ownerId",
            "description": "<p>filter by userId (the uploader)</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "latest",
            "description": "<p>['latest', 'favorite']</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "skip",
            "description": "<p>the number of records to skip (pageCount * pageNumber)</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "pageCount",
            "description": "<p>the number of records in a page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "multiple",
            "optional": false,
            "field": "multiple",
            "description": "<p>data: a list of results, count: count all (to find out the number of pages)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "output example",
          "content": "{\n    data: [\n        {Photo1}, {Photo2}, {Photo3}\n    ],\n    count: 123\n}\nor if photoId param is passed\n{Photo}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos"
  },
  {
    "type": "post",
    "url": "/photos/getMyPhotos",
    "title": "get my photos",
    "name": "getMyPhotosAll",
    "group": "photos",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>['metas', 'submitted', 'rejected-metas', 'rejected-photo', 'approved']</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>['latest', 'favorite']</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "skip",
            "description": "<p>the number of records to skip (pageCount * pageNumber)</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "pageCount",
            "description": "<p>the number of records in a page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "multiple",
            "optional": false,
            "field": "multiple",
            "description": "<p>data: a list of photos (fully processed and ready), count: count all (to find out the number of pages)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "output example",
          "content": "{\n    data: [\n        {Photo1}, {Photo2}, {Photo3}\n    ],\n    count: 123\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/photos/getMyPhotos/uploads",
    "title": "get upload manager photos",
    "name": "getMyPhotosUploads",
    "group": "photos",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>the number of records to skip (pageCount * pageNumber)</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "pageCount",
            "description": "<p>the number of records in a page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "multiple",
            "optional": false,
            "field": "multiple",
            "description": "<p>data: a list of uploaded photos (not fully processed or awaiting for metas photos), count: count all (to find out the number of pages)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "output example",
          "content": "{\n    data: [\n        {Photo1}, {Photo2}, {Photo3}\n    ],\n    count: 123\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/photos/ref/:ref",
    "title": "Get photo By reference",
    "name": "getPhotoByRef",
    "group": "photos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>request photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "photo example..",
          "content": "{\n    \"_id\" : ObjectId(\"59ca7e133b191b1c47af4c84\"),\n    \"originalname\" : \"Screenshot from 2017-09-21 11-05-54\",\n    \"reference\" : \"e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb\",\n    \"user\" : {\n      \"_id\": \"59997f67da6ceb6f3f4c9c89\",\n      \"name\" : \"user\",\n      \"email\" : \"user@mail.com\",\n      \"gender\": \"male\",\n      \"age\" : 35,\n      \"bio\": \"best photographer ever\",\n      \"role\": \"photographer\",\n      \"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n      \"confirmed\" : true\n    },\n    \"fileStatus\" : \"completed\",\n    \"viewsCount\" : 0,\n    \"homePhoto\" : false,\n    \"favCount\" : 0,\n    \"adminTags\" : [],\n    \"tags\" : [],\n    \"__v\" : 0,\n    \"format\" : \"image/png\",\n    \"height\" : 768,\n    \"mediumURL\" : \"https://s3.eu-west-2.amazonaws.com/local-contentmaster-public/e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb-medium\",\n    \"pHash\" : \"005300260190012902950186035801790685036404720246075104140053-038018900300289-0480344-0600660-1130452-0420778-03700510053018701890282029003230345062706630424045407130775\",\n    \"photoStatus\" : \"metas\",\n    \"processingStartTime\" : null,\n    \"smallURL\" : \"https://s3.eu-west-2.amazonaws.com/local-contentmaster-public/e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb-small\",\n    \"width\" : 1366,\n    \"favCount\": 0,\n    \"homePhoto\": true\n    \"viewsCount\": 0,\n    \"countrycode\": {\n       \"id\": 0,\n       \"code\": \"AF\",\n       \"name\": \"Afghanistan\"\n    },\n    \"adminMessage\": \"\",\n    relatedImages: [ array of photo ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Photo_Not_Found",
            "description": "<p>the requested photo is not exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing Authentication",
          "content": "HTTP/1.1 401 Authentication required\n{\n   code: 'authentication_required',\n      message: 'Authentication Rrequired'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/photos/favorites",
    "title": "get favorited photos",
    "name": "getfavorites",
    "group": "photos",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "skip",
            "description": "<p>the number of records to skip (pageCount * pageNumber)</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "pageCount",
            "description": "<p>the number of records in a page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>a list of results, count: count all (to find out the number of pages)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "output example",
          "content": "{\n    data: [\n        {Photo1}, {Photo2}, {Photo3}\n    ],\n    count: 123\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/photos/homePhotos",
    "title": "browse photos flagged for homepage",
    "name": "homePhotos",
    "group": "photos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[Photo]",
            "optional": false,
            "field": "data",
            "description": "<p>list of photos (user.name populated)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Array of photos",
          "content": "[\n photo1, photo2, photo3, ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos"
  },
  {
    "type": "post",
    "url": "/photos/setFavorite/:id",
    "title": "Add photo to favorite collection",
    "name": "setFavorite",
    "group": "photos",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>the photo id</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>favorite status to set (true or false)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>the favorite status</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/photos/:id",
    "title": "update photo",
    "name": "updatePhoto",
    "group": "photos",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>photo title</p>"
          },
          {
            "group": "body",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>photo tags</p>"
          },
          {
            "group": "body",
            "type": "Object",
            "optional": false,
            "field": "country",
            "description": "<p>country object from country list example: {&quot;id&quot;: 0, &quot;code&quot;: &quot;AF&quot;, &quot;name&quot;: &quot;Afghanistan&quot;}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "photo",
            "description": "<p>the updated photo (photoStatus changes to submitted, and the photo is waiting for approval)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "photo example..",
          "content": "{\n    \"_id\" : ObjectId(\"59ca7e133b191b1c47af4c84\"),\n    \"originalname\" : \"Screenshot from 2017-09-21 11-05-54\",\n    \"reference\" : \"e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb\",\n    \"user\" : {\n      \"_id\": \"59997f67da6ceb6f3f4c9c89\",\n      \"name\" : \"user\",\n      \"email\" : \"user@mail.com\",\n      \"gender\": \"male\",\n      \"age\" : 35,\n      \"bio\": \"best photographer ever\",\n      \"role\": \"photographer\",\n      \"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n      \"confirmed\" : true\n    },\n    \"fileStatus\" : \"completed\",\n    \"viewsCount\" : 0,\n    \"homePhoto\" : false,\n    \"favCount\" : 0,\n    \"adminTags\" : [],\n    \"tags\" : [],\n    \"__v\" : 0,\n    \"format\" : \"image/png\",\n    \"height\" : 768,\n    \"mediumURL\" : \"https://s3.eu-west-2.amazonaws.com/local-contentmaster-public/e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb-medium\",\n    \"pHash\" : \"005300260190012902950186035801790685036404720246075104140053-038018900300289-0480344-0600660-1130452-0420778-03700510053018701890282029003230345062706630424045407130775\",\n    \"photoStatus\" : \"metas\",\n    \"processingStartTime\" : null,\n    \"smallURL\" : \"https://s3.eu-west-2.amazonaws.com/local-contentmaster-public/e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb-small\",\n    \"width\" : 1366,\n    \"favCount\": 0,\n    \"homePhoto\": true\n    \"viewsCount\": 0,\n    \"countrycode\": {\n       \"id\": 0,\n       \"code\": \"AF\",\n       \"name\": \"Afghanistan\"\n    },\n    \"adminMessage\": \"\",\n    relatedImages: [ array of photo ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Not_Found",
            "description": "<p>entity not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Photo_Not_Processed",
            "description": "<p>the photo is not processed successfully (yet!)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/photos/upload",
    "title": "Upload photo",
    "name": "upload",
    "group": "photos",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "file",
            "optional": false,
            "field": "upload",
            "description": "<p>file input</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "data",
            "description": "<p>the photo data (pending processing, keep checking the getMyPhoto/photoId if the photo processing is completed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "photo example..",
          "content": "{\n    \"_id\" : ObjectId(\"59ca7e133b191b1c47af4c84\"),\n    \"originalname\" : \"Screenshot from 2017-09-21 11-05-54\",\n    \"reference\" : \"e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb\",\n    \"user\" : {\n      \"_id\": \"59997f67da6ceb6f3f4c9c89\",\n      \"name\" : \"user\",\n      \"email\" : \"user@mail.com\",\n      \"gender\": \"male\",\n      \"age\" : 35,\n      \"bio\": \"best photographer ever\",\n      \"role\": \"photographer\",\n      \"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n      \"confirmed\" : true\n    },\n    \"fileStatus\" : \"completed\",\n    \"viewsCount\" : 0,\n    \"homePhoto\" : false,\n    \"favCount\" : 0,\n    \"adminTags\" : [],\n    \"tags\" : [],\n    \"__v\" : 0,\n    \"format\" : \"image/png\",\n    \"height\" : 768,\n    \"mediumURL\" : \"https://s3.eu-west-2.amazonaws.com/local-contentmaster-public/e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb-medium\",\n    \"pHash\" : \"005300260190012902950186035801790685036404720246075104140053-038018900300289-0480344-0600660-1130452-0420778-03700510053018701890282029003230345062706630424045407130775\",\n    \"photoStatus\" : \"metas\",\n    \"processingStartTime\" : null,\n    \"smallURL\" : \"https://s3.eu-west-2.amazonaws.com/local-contentmaster-public/e338da307bb3cc8e3fd7d531ae8a660d-59aefaa78225824a2f81cbbb-small\",\n    \"width\" : 1366,\n    \"favCount\": 0,\n    \"homePhoto\": true\n    \"viewsCount\": 0,\n    \"countrycode\": {\n       \"id\": 0,\n       \"code\": \"AF\",\n       \"name\": \"Afghanistan\"\n    },\n    \"adminMessage\": \"\",\n    relatedImages: [ array of photo ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No_File",
            "description": "<p>no uploaded file with the request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Only_Image_Allowed",
            "description": "<p>the uploaded file is not an image [png, jpg, jpeg]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/photos.js",
    "groupTitle": "photos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/authenticate",
    "title": "authenticate (login)",
    "name": "authenticate",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error: IncorrectCredentials 400": [
          {
            "group": "Error: IncorrectCredentials 400",
            "optional": false,
            "field": "IncorrectCredentials",
            "description": "<p>The <code>username</code> or <code>password</code> is invalid.</p>"
          }
        ],
        "Error: UserNotConfirmed 401": [
          {
            "group": "Error: UserNotConfirmed 401",
            "optional": false,
            "field": "UserNotConfirmed",
            "description": "<p>The user is not confirmed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Incorrect Credentials",
          "content": "HTTP/1.1 400 Bad Request\n{\n   code: 'number_password_incorrect',\n      message: 'Number or Password incorrect'\n}",
          "type": "json"
        },
        {
          "title": "User not confirmed",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"code\": 304,\n  \"error\": \"user_not_confirmed\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>The user profile with a token (save the token in a local storage)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"_id\": \"59997f67da6ceb6f3f4c9c89\",\n\t\"name\" : \"user\",\n\t\"email\" : \"user@mail.com\",\n\t\"gender\": \"male\",\n\t\"age\" : 35,\n\t\"bio\": \"best photographer ever\",\n\t\"role\": \"photographer\",\n\t\"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n\t\"confirmed\" : true,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTk5N2Y2N2RhNmNlYjZmM2Y0YzljODkiLCJpYXQiOjE1MDMyMzI4MzZ9.ZK18OeHho0rf7jSwDyb2Tg6_IHmYjaCw9KuDCb-29Fs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/forgotPassword",
    "title": "Forgot password email",
    "name": "forgotPassword",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email (if not registered. the server do nothing)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true (always)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "get all users",
    "name": "getAllUsers",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "Users",
            "description": "<p>list of users</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/profile",
    "title": "Current User",
    "name": "profile",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>the user profile</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"_id\": \"59997f67da6ceb6f3f4c9c89\",\n\t\"name\" : \"user\",\n\t\"email\" : \"user@mail.com\",\n\t\"gender\": \"male\",\n\t\"age\" : 35,\n\t\"bio\": \"best photographer ever\",\n\t\"role\": \"photographer\",\n\t\"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n\t\"confirmed\" : true,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTk5N2Y2N2RhNmNlYjZmM2Y0YzljODkiLCJpYXQiOjE1MDMyMzI4MzZ9.ZK18OeHho0rf7jSwDyb2Tg6_IHmYjaCw9KuDCb-29Fs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Missing Authentication",
          "content": "HTTP/1.1 401 Authentication required\n{\n   code: 'authentication_required',\n      message: 'Authentication Rrequired'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "register user",
    "name": "register",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>User Bio</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>User role ['admin', 'photographer', 'buyer'], 'photographer' is default</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>User age</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"_id\": \"59997f67da6ceb6f3f4c9c89\",\n\t\"name\" : \"user\",\n\t\"email\" : \"user@mail.com\",\n\t\"gender\": \"male\",\n\t\"age\" : 35,\n\t\"bio\": \"best photographer ever\",\n\t\"role\": \"photographer\",\n\t\"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n\t\"confirmed\" : true,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTk5N2Y2N2RhNmNlYjZmM2Y0YzljODkiLCJpYXQiOjE1MDMyMzI4MzZ9.ZK18OeHho0rf7jSwDyb2Tg6_IHmYjaCw9KuDCb-29Fs\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error: InvalidInput 400": [
          {
            "group": "Error: InvalidInput 400",
            "optional": false,
            "field": "MissingInfo",
            "description": "<p><code>name</code>, <code>email</code>, <code>password</code>, <code>role</code> or <code>age</code>.</p>"
          }
        ],
        "Error: EmailExists 400": [
          {
            "group": "Error: EmailExists 400",
            "optional": false,
            "field": "EmailExists",
            "description": "<p><code>email</code> already found in the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Input",
          "content": "HTTP/1.1 400 Bad Request\n{\n   status: 400,\n      code: 'Bad_Request',\n      message: 'Missing required data'\n}",
          "type": "json"
        },
        {
          "title": "Email Exists",
          "content": "HTTP/1.1 400 Bad Request\n{\n      code: 'email_already_exists',\n      message: 'Email is already registered'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/registerDevice",
    "title": "FCM registerDevice",
    "name": "registerDevice",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>FCM registration token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error: InvalidInput 400": [
          {
            "group": "Error: InvalidInput 400",
            "optional": false,
            "field": "MissingInfo",
            "description": "<p><code>token</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing Authentication",
          "content": "HTTP/1.1 401 Authentication required\n{\n   code: 'authentication_required',\n      message: 'Authentication Rrequired'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/resendConfirmation",
    "title": "Resend confirmation email",
    "name": "resendConfirmation",
    "group": "users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Email_Already_Confirmed",
            "description": "<p>the email is confirmed and no need to send an email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/resetPassword",
    "title": "reset password",
    "name": "resetPassword",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "lookup",
            "description": "<p>the request lookup</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "verify",
            "description": "<p>the request verify</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>the new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true (does not notify which email reseted for security reasons)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad_Request",
            "description": "<p>the request is invalid (the server do not specificy the reason)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Reset_Link_Expired",
            "description": "<p>(the reset link is expired (one hour passed)) in mobile application just ask him to open his email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/updatePassword",
    "title": "Update user password",
    "name": "updatePassword",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>the old password</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>the new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Old_Password_Mismatch",
            "description": "<p>the old password is incorrect</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/updateProfile",
    "title": "update Profile info",
    "name": "updateProfile",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "age",
            "description": "<p>user age</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "male",
            "description": "<p>user gender</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>user biography</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>User profile</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"_id\": \"59997f67da6ceb6f3f4c9c89\",\n\t\"name\" : \"user\",\n\t\"email\" : \"user@mail.com\",\n\t\"gender\": \"male\",\n\t\"age\" : 35,\n\t\"bio\": \"best photographer ever\",\n\t\"role\": \"photographer\",\n\t\"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n\t\"confirmed\" : true,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTk5N2Y2N2RhNmNlYjZmM2Y0YzljODkiLCJpYXQiOjE1MDMyMzI4MzZ9.ZK18OeHho0rf7jSwDyb2Tg6_IHmYjaCw9KuDCb-29Fs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Missing Authentication",
          "content": "HTTP/1.1 401 Authentication required\n{\n   code: 'authentication_required',\n      message: 'Authentication Rrequired'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/updateProfilePic",
    "title": "Update profile Image",
    "name": "updateProfilePic",
    "group": "users",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "file",
            "optional": false,
            "field": "upload",
            "description": "<p>file input</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No_File",
            "description": "<p>no uploaded file with the request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Only_Image_Allowed",
            "description": "<p>the uploaded file is not an image [png, jpg, jpeg]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>passing the authentication token is required as 'JWT token'</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "get user by id",
    "name": "userById",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "the",
            "description": "<p>requested user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"_id\": \"59997f67da6ceb6f3f4c9c89\",\n\t\"name\" : \"user\",\n\t\"email\" : \"user@mail.com\",\n\t\"gender\": \"male\",\n\t\"age\" : 35,\n\t\"bio\": \"best photographer ever\",\n\t\"role\": \"photographer\",\n\t\"profilePicURL\": \"http://someUrl\", // this kye is only exist if user upload a photo ..\n\t\"confirmed\" : true,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTk5N2Y2N2RhNmNlYjZmM2Y0YzljODkiLCJpYXQiOjE1MDMyMzI4MzZ9.ZK18OeHho0rf7jSwDyb2Tg6_IHmYjaCw9KuDCb-29Fs\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error: InvalidInput 400": [
          {
            "group": "Error: InvalidInput 400",
            "optional": false,
            "field": "MissingInfo",
            "description": "<p><code>name</code>, <code>email</code>, <code>password</code> or are not specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Input",
          "content": "HTTP/1.1 400 Bad Request\n{\n   status: 400,\n      code: 'Bad_Request',\n      message: 'Missing required data'\n}",
          "type": "json"
        },
        {
          "title": "Missing Authentication",
          "content": "HTTP/1.1 401 Authentication required\n{\n   code: 'authentication_required',\n      message: 'Authentication Rrequired'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  }
] });
