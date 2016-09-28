var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * =============
 */

var Work_Item = new keystone.List('Work_Item', {
	autokey: { from: 'title', path: 'key', unique: true },
});

Work_Item.add({
  title: { type: String, required: true, initial: false },
	desc: { type: String, label: 'Description', required: true, initial: false },
  location: { type: Types.Location },
  projectType: { type: Types.Select, label: 'Type of Project', required: true, initial: false, options: 'website/app, speaking, writing, installation, community, design'},
  dateFrom: { type: Types.Date, required: true, initial: false },
  dateTo: { type: Types.Date },
  externalLink: { type: Types.Url },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
  published: { type: Types.Boolean, label: 'Show on Site' },
  featured: { type: Types.Boolean, label: 'Show on My Things main' }
});

Work_Item.register();
