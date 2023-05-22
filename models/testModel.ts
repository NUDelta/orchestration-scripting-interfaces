import { Schema, model, models, Document } from 'mongoose';

export interface ITest extends Document {
  title: string;
  sigName: string;
  script: string;
  Description: string;
  Detector: [string, string];
  GeneralContext: [string];
  RC_C_S: [{
    id: number;
    rootCause: string;
    context: [string];
    strategy: string;
  }];
}

const testSchema = new Schema({
  title: String,
  script: String,
  sigName: {
    type: String,
    required: true,
  },
  Description: String,
  Detector: {
    type: [String,String],
  },
  GeneralContext: {
    type: [String],
  },
  RC_C_S: {
    type: [{
      id: Number,
      rootCause: String,
      context: [String],
      strategy: String,
    }],
  }
});

export default models.Test || model('Test', testSchema);