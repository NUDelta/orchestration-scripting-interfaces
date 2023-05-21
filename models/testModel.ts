import { Schema, model, models, Document } from 'mongoose';

export interface ITest extends Document {
  title: string;
  sigName: string;
  Detector: [string, string];
  GeneralContext: [string];
  RC_C_S: {
    RC: string;
    C: [string];
    S: string;
  };
}

const testSchema = new Schema({
  title: String,
  sigName: {
    type: String,
    required: true,
  },
  Detector: {
    type: [String,String],
  },
  GeneralContext: {
    type: [String],
  },
  RC_C_S: {
    type: [{
      RC: String,
      C: [String],
      S: String,
    }],
  }
});

export default models.Test || model('Test', testSchema);
// export default model('Test', testSchema);
// const Test = model<ITest>('Test', testSchema);

// export default {Test};
// export { ITest };