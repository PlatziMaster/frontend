const descriptionType = {
  Certificate: {
    keys: ['name', 'description', 'institution', 'date'],
    header: '{name} - {institution} - {date}',
    body: '{description}',
  },
  Experience: {
    keys: ['jobTitle', 'jobDescription', 'company', 'startDate', 'endDate'],
    header: '{jobTitle} at {company} __________ {startDate} - {endDate}',
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
