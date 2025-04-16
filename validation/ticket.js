
const { body } = require('express-validator');



exports.userValidation = [
    body('ticketId')
      .trim()
      .notEmpty().withMessage('TicketId is required')
      .isLength({ min: 2 }).withMessage('Id must be at least 2 characters'),
  
    body('title')
      .trim()
      .notEmpty().withMessage('Title is required'),
  
    body('description')
      .notEmpty().withMessage('Description is must for information'),

    body('userId')
      .notEmpty().withMessage('userId is required')
      .isLength({ min:1 }),

    body('assignId')
      .notEmpty().withMessage('assignId is required')
      .isLength({ min:2 }),

    body('priority')
      .notEmpty().withMessage('Priority is required'),
     
    
    body('status')
      .notEmpty().withMessage('status is required for status information')
      
      
  ];