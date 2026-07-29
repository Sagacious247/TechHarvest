import Setting from "../models/setting.model";

export const getSettings = async () => {

  let settings = await Setting.findOne();

  if (!settings) {

    settings = await Setting.create({});

  }

  return settings;

};

export const updateSettings = async (
  data: any
) => {

  let settings = await Setting.findOne();

  if (!settings) {

    settings = await Setting.create({});

  }

  Object.assign(settings, data);

  await settings.save();

  return settings;

};