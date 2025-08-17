const sendSms = async (phone, message) => {
  try {
    // Əslində burada Twilio və ya başqa SMS provider istifadə edərsən
    console.log(`📩 SMS ${phone} nömrəsinə göndərildi: ${message}`);
    return true;
  } catch (error) {
    console.error("SMS göndərilmədi:", error.message);
    return false;
  }
};

module.exports = { sendSms };
