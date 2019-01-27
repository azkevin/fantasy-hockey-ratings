const app = {
  selectRow(dataTable) {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      dataTable.$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
    }
  },

  // Run when the page is refreshed
  start() {
    // Populates the table with the data
    const dataTable = $('#rating_table').DataTable({
      data: dataSet,
      columns: [
        { title: 'Name' },
        { title: 'Position' },
        { title: 'Office' },
        { title: 'Extn.' },
        { title: 'Start date' },
        { title: 'Salary' }
      ]
    });

    // Allows user to select rows on the table
    const self = this;
    $('#rating_table tbody').on('click', 'tr', function(){
      self.selectRow.bind(this, dataTable)();
    });
  }
};
$(document).ready(() => app.start());