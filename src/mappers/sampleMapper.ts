type Sample = {
    firstname: string;
    lastname: string;
}

type SampleDto = {
    fullname: string;
}

export const sampleMapper = (sample: Sample): SampleDto => {
  return {fullname: `${sample.firstname} ${sample.lastname}`};
};