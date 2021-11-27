import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { book_code } = req.body;
    const books = await db.collection('books').get();
    const booksData = books.docs.map(book => book.data());

    if (booksData.some(book => book.book_code === book_code)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('books').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}