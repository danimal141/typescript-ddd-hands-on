import { BookId } from "Domain/models/Book/BookId/BookId";
import { IBookRepository } from "Domain/models/Book/IBookRepository";

// ドメインサービスを利用する判断軸:
// 複数集約をまたいだ処理が必要な場合
// DB ヘの問い合わせが必要な場合
export class ISBNDuplicationCheckDomainService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(isbn: BookId): Promise<boolean> {
    // データベースに問い合わせて重複があるか確認する
    const duplicateISBNBook = await this.bookRepository.find(isbn);
    const isDuplicateISBN = !!duplicateISBNBook;

    return isDuplicateISBN;
  }
}
