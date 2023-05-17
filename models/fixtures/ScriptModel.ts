import mongoose from 'mongoose';

export interface OSEScript {
  Name: String;
  Desc: String;
  //Blockly's Xml + Code generated
  Detector: [String, String];
  GeneralContext: String[];
  RC_C_S: [{
           RC: String,
           C: [String],
           S: String,
         }]
}

const OSEScriptSchema = new mongoose.Schema<OSEScript>({
  Name: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
  Detector: {
    type: [String,String],
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

export default (mongoose.models.OSEScript as mongoose.Model<OSEScript>) ||
  mongoose.model('OSEScript', OSEScriptSchema);
