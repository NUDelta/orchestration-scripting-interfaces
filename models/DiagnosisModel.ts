import mongoose from 'mongoose';

export interface DiagnosisPage {
  Name: String;
  Desc: String;
  Applicable_Set: String;
  //Code components that triggered the detector
  DetectorDebrief: [String];
  GeneralContext: [String];
  RC_C_S: [{
           RC: String,
           C: [String],
           S: String,
         }];
}

const DiagnosisPageSchema = new mongoose.Schema<DiagnosisPage>({
  Name: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
  DetectorDebrief: {
    type: [String],
    required: true,
  },
  GeneralContext: {
    type: [String],
    required: true,
  },
  RC_C_S: {
    type: [{
      RC: String,
      C: [String],
      S: String,
    }],
    required: true,
  }
});

export default (mongoose.models.DiagnosisPage as mongoose.Model<DiagnosisPage>) ||
  mongoose.model('DiagnosisPage', DiagnosisPageSchema);
