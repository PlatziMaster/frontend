const descriptionType = {
  Certificate: {
    keys: ['name', 'description', 'institution', 'date'],
    header: '{name} - {institution} - {date}',
    body: '{description}',
  },
  Experience: {
    keys: ['jobTitle', 'jobDescription', 'company', 'startDate', 'endDate'],
    header: '{jobTitle} at {company} ___ {startDate} - {endDate}',
    body: '{jobDescription}',
  },
  Academic: {
    keys: ['degree', 'institution', 'startDate', 'endDate'],
    header: '{degree}',
    body: '{institution} {startDate} - {endDate}',
  },
  Interest: {
    keys: ['name'],
    header: '{name}',
    body: '',
  },
  Skills: {
    keys: ['name', 'percentage'],
    header: '{name}',
    body: '{percentage}',
    fieldType: 'Percentage',
  },
  Languages: {
    keys: ['name', 'percentage'],
    header: '{name}',
    body: '{percentage}',
    fieldType: 'Percentage',
  },
  Social: {
    keys: ['name', 'url'],
    header: '{name}',
    body: '{url}',
    fieldType: 'Url',
  },
  Default: {
    keys: ['name', 'description'],
    header: '{name}',
    body: '{description}',
  },
};

// This function takes in two parameters, 'type' and 'information', and returns an object with three properties:
//  'header', 'type', and 'body'.
//
//The function uses the parameter 'type' to access a specific set of keys, header, body, and fieldType from the descriptionType
//It then loops through the keys and replaces any placeholder values in the header and body strings
//  with the corresponding values from the information parameter.
//Finally, it returns an object with the generated header, type (defaults to Text if no fieldType is provided), and body.
const buildDescription = (type, information) => {
  const { keys, header, body, fieldType } =
    descriptionType[type] || descriptionType.Default;

  let generatedHeader = header;
  let generatedBody = body;

  keys.forEach(key => {
    generatedHeader = generatedHeader.replace(`{${key}}`, information[key]);
    generatedBody = generatedBody.replace(`{${key}}`, information[key]);
  });

  return {
    header: generatedHeader,
    type: fieldType || 'Text',
    body: generatedBody,
  };
};

export default buildDescription;
