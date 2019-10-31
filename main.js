let formData = [
  {
    "type": "text",
    "label": "Name",
    "id": "user-name",
    "options": []
  },
  {
    "type": "text",
    "label": "Location",
    "id": "user-location",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "options": []
  },
  {
    "type": "number",
    "label": "Weather Quality",
    "id": "user-weather",
    "options": []
  },
  {
    "type": "select",
    "label": "Renewable type",
    "id": "user-RenewableType",
    "options": [
      {
        "label": "Solar",
        "value": "Solar"
      },
      {
        "label": "Hydropower",
        "value": "water"
      },
      {
        "label": "Wind",
        "value": "wind"
      }
    ]
  },
  {
    "type": "select",
    "label": "Select Weather Quality ",
    "id": "user-weatherType",
    "options": [
      {
        "label": "Sunny",
        "value": "Sun"
      },
      {
        "label": "Cloudy",
        "value": "Cloud"
      },
      {
        "label": "Rainy",
        "value": "Rain"
      },
      {
        "label": "Windy",
        "value": "Wind"
      },
      {
        "label": "Snowy",
        "value": "Snow"
      }
    ]
  },
  {
    "type": "boolean",
    "label": "Deployment Required",
    "id": "user-deployment",
    "options": [
      {
        "label": "Yes",
        "value": "Y"
      },
      {
        "label": "No",
        "value": "N"
      }
    ]
  },
  {
    "type": "boolean",
    "label": "Service Required",
    "id": "user-service",
    "options": [
      {
        "label": "Yes",
        "value": "Y"
      },
      {
        "label": "No",
        "value": "N"
      }
    ]
  },
  {
    "type": "number",
    "label": "Total Units ",
    "id": "user-units",
    "options": []
  },
  {
    "type": "number",
    "label": "Operating Units",
    "id": "user-operatingUnits",
    "options": []
  },
  {
    "type": "text",
    "label": "Conditions",
    "id": "user-conditions",
    "options": []
  },
];


let co = document.getElementById("fields")

for (var i = 0; i < formData.length; i++) {
  let input = document.createElement("input")



  if (formData[i].options.length == 0) {
    input.setAttribute("type","text")
    input.setAttribute("id","text")
    input.setAttribute("placeholder",formData[i].label)
    co.appendChild(input)

  }

  else {
    let select = document.createElement("select")
    select.setAttribute("id",formData[i].id)
    co.appendChild(select)
    select = document.getElementById(formData[i].id)

    for (var j = 0; j < formData[i].options.length; j++) {
      let options = document.createElement("option");
    //  options.setAttribute("placeholder", formData[i].label)
      options.setAttribute("label", formData[i].options[j].label);
      options.setAttribute("value", formData[i].options[j].value);

      select.appendChild(options)
    }
  }
}
