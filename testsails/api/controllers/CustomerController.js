/**
 * CustumersController
 *
 * @description :: Server-side logic for managing custumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  getCustomer: function (req, res) {

    var id = req.param('id')
    var criteria = id ? { id : id }: null;
    Customer.find(criteria).exec(function (err, usersNamedFinn) {
      if (err) {
        sails.log.error('CustomerController: Error when getting the Customer', err);
        return res.serverError(err);
      }
      sails.log.debug('Wow, there are %d users.  Check it out:', usersNamedFinn.length, usersNamedFinn);
      return res.json(usersNamedFinn);
    });

  },

  getOneCustomer: function (req, res) {
    var id = req.param('id');
    var criteria = { id: id };
    Customer.findOne(criteria).exec(function (err, getone) {
      if (err) {
        sails.log.error('CustomerController: Error when getting one Customer', err)
        return res.serverError(err);
      }
      if (!getone) {
        return res.notFound('Could not find getone, sorry');
      }
      sails.log.debug('found "%s"', getone.customerName);
      return res.json(getone);
    });
  },

  createCustomer: function (req, res) {
    var customer = req.body;
    console.log(JSON.stringify(customer, null, 2));
    Customer.create(customer).exec(function (err, newCustomer) {

      if (err) {
        sails.log.error('CustomerController: Error when creating the Customer', err);
        return res.serverError(err);
      }

      sails.log.debug('Customer is:', newCustomer);
      return res.send(newCustomer);
    });
  },

  deleteCustomer: function (req, res) {
    var id = req.param('id');
    var criteria = { id: id }
    Customer.destroy(criteria).exec(function (err, deletedRecords) {
      if (err) {
        sails.log.error('CustomerController: Error when deleting the Customer', err);
        return res.negotiate(err);
      }
      sails.log.debug('Any users named have now been deleted, if there were any.');
      return res.ok(deletedRecords);
    });
  },

  updateCustomer: function (req, res) {
    var customer = req.body
    var criteria = { id: customer.id }
    Customer.update(criteria, customer).exec(function (err, updated) {

      if (err) {
        sails.log.error('CustomerController: Error when updating the Customer', err);
        // handle error here- e.g. `res.serverError(err);`
        return res.serverError(err);
      }

      console.log('updated name:%d', updated[0].customerName);
      return res.ok(updated);
    });
  }


};

