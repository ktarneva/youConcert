import { Request, Response } from 'express';
const Recommendations = require ('../schemas/recommendations');

const recommendations_index = (req: Request, res: Response): void => {
  Recommendations.find().sort({ createdAt: -1 })
    .then((result: any) => {
      res.render('index', { recommendations: result, title: 'All Recommend' });
    })
    .catch((err: Error) => {
      console.log(err);
    });
}

  
  const recommendations_details = (req: Request, res: Response): void => {
    const id = req.params.id;
    Recommendations.findById(id)
      .then((result:any) => {
        res.render('details', { Recommendations: result, title: 'Recommendations Details' });
      })
      .catch((err: Error) => {
        console.log(err);
        res.render('404', { title: 'Recommendations not found' });
      });
  }
  
  const recommendations_create_get = (req: Request, res: Response): void => {
    res.render('create', { title: 'Create a new Recommendations' });
  }
  
  const recommendations_create_post = (req: Request, res: Response): void =>{
    const recommendations = new Recommendations(req.body);
    recommendations.save()
      .then((result:any) => {
        res.redirect('/recommendations');
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
  
  const recommendations_delete = (req: Request, res: Response): void =>{
    const id = req.params.id;
    Recommendations.findByIdAndDelete(id)
      .then((result:any) => {
        res.json({ redirect: '/recommendations' });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
  
  module.exports = {
    recommendations_index, 
    recommendations_details, 
    recommendations_create_get, 
    recommendations_create_post, 
    recommendations_delete
  }
