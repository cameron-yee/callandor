# Callandor

## Development

```
$ git clone https://github.com/cameron-yee/callandor
$ yarn start
```

## Usage

Define categories and sub-categories in `constants.ts`. The data structure
must stay the same. Each category object has a name property and a list of
sub-category objects. Each sub-category object has a name property.

Edit `pages/index.tsx` to customize what shows up on the dashboard.

### Example

```
<Dashboard
  categories={['social']}
  fixedItems={true}
  subCategories={['groceries', 'coffee']}
  yearLook={true}
/>
```

### Data Entry

To enter data, add objects to `src/data/budget.json`, `src/data/incomes.json`,
and `src/data/purchases.json`. The data format is used to render components, so
make sure to keep all the field names the same. The dashboard information is
based on data in these three files.

For batch adding purchases, I recommend using [excel2json-3](https://pypi.org/project/excel2json-3/).
In the Excel file, create columns labeled `date`, `amount`, `category`,
`subCategory`, and `notes`. Set the date column to type `text` and the amount
column type to `number`. Once you convert the file, you can append the objects
directly to the `purchases.json` file.

### Options

- categories: list of category names to display information about on the dashoard
- subCategories: list of sub-category names to display information about on the dashoard
- fixedItems (true/false): include fixed information on the dashboard
- yearLook (true/false): include net information for months of the selected year on the dashboard


## Deployment

Fork the repository and make it a private repo.

Deploy to [Netlify](https://www.netlify.com/) using the default settings or to
any other static site deployer.

### Security

I recommend setting up Netlify Identity to protect your site behind password protection.

