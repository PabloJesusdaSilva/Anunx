const users = async (req, res) => {
  const { method } = req;

  switch(method) {
    case 'GET':
      res.status(200).json({ success: true });
      break;
  }
}

export default users;