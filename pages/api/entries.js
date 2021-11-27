import db from '../../utils/db';

export default async (req, res) => {
  try {
    const books = await db.collection('books').orderBy('create_date').get();
    const booksData = books.docs.map(book => ({
      id: book.id,
      ...book.data(),
    }));
    res.status(200).json({ booksData });
  } catch (e) {
    res.status(400).end();
  }
}