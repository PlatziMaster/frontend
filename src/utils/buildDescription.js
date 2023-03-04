const descriptionType = {
  certificate: {
    keys: ['name', 'description', 'institution', 'date'],
    header: '{name} - {institution} - {date}',
    body: '{description}',
  },
  default: {
    keys: ['name', 'description'],
    header: '{name}',
    body: '{description}',
  },
};

const buildDescription = (type, information) => {
  const { keys, header, body } =
    descriptionType[type] || descriptionType.default;

  let generatedHeader = header;
  let generatedBody = body;

  keys.forEach((key) => {
    generatedHeader = generatedHeader.replace(
      `{${key}}`,
      information[key],
    );
    generatedBody = generatedBody.replace(`{${key}}`, information[key]);
  });

  return { header: generatedHeader, body: generatedBody };
};

export default buildDescription;
