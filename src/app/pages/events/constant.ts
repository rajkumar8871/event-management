const Genders: Array<string> = ['Male', 'Female'];
const Types: Array<string> = ['Festival', 'Wedding', 'Tradeshows', 'Leisure Events', 'Conferences'];
const Columns = [
    { type: 'text', title: { caption: 'Type' }, data: { field: 'type' } },
    { type: 'img', title: { caption: 'Image' }, data: { field: 'image' } },
    { type: 'date', title: { caption: 'Date' }, data: { field: 'date' } },
    { type: 'text', title: { caption: 'Gender' }, data: { field: 'gender' } },
    { type: 'subfield', title: { caption: 'Location' }, data: { field: 'location' }, subfield: [] },
    { type: 'action', title: { caption: 'Action' }, data: { field: 'action' }, actions: { isEditable: true, isDeletable: true } },
  ];

export {
  Genders, Types, Columns
};