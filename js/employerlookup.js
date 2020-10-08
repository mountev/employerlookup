CRM.$(function($) {
  $('#current_employer').autocomplete({
      source: function (request, response) {
        $.ajax({
          url: CRM.url('civicrm/ajax/rest'),
          type: 'post',
          data: {
            //entity: 'Contact',
            //action: 'getlist',
            entity: 'Employerlookup',
            action: 'get',
            json: JSON.stringify({"params":{"contact_type":"Organization"},"input":request.term})
          },
          success: function( data ) {
            console.log(' $data ');
            console.log(data);
            //response( data.values || []);
            response(data);
          }
        });
      },
      select: function( event, ui ) {
        console.log("ui");
        console.log(ui);
        // Set selection
        $('#current_employer').val(ui.item.label); // display the selected text
        //$('#selectuser_id').val(ui.item.value); // save selected id to input
        return false;
      }
  });
});
