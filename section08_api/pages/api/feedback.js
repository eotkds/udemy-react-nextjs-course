function handler(req, res) {
    console.log(req);
    //   const email = req.body.email
    //   const text = req.body.text

    //   const newFeedback = {
    //     id: new Date().toISOString(),
    //     email: email,
    //     text: text
    //   }

    //   res.status(201).json({message: 'Success!', feedback: newFeedback})
    res.status(200).json({ message: "Success!" });
}

export default handler;
