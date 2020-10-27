exports.handler = function(event, context, callback) {
    const data = JSON.parse(event.body);
    const { user } = data;
    const {email, id} = user ; 
      
    const responseBody = {
      app_metadata: {
        ...user.app_metadata
      },
      user_metadata: {
        ...user.user_metadata, // append current user metadata
        special: String(email) + "~" + String(id)
      }
    };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    });
  };