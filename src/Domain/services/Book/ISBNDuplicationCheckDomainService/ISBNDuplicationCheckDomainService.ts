import { BookId } from "Domain/models/Book/BookId/BookId";

// ドメインサービスを利用する判断軸:
// 複数集約をまたいだ処理が必要な場合
// DB ヘの問い合わせが必要な場合
export class ISBNDuplicationCheckDomainService {
  async execute(isbn: BookId): Promise<boolean> {
    // 本来は、データベースに問い合わせて重複があるか確認する。この章では省略。
    const isDuplicateISBN = false;

    return isDuplicateISBN;
  }
}
