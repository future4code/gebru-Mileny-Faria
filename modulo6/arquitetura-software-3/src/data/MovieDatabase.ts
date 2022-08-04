import { BaseDatabase } from './BaseDatabase'

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_MOVIE'

  async create({ id, title, description, durationInMinutes, yearOfRelease }: any): Promise<void> {
    await MovieDatabase
        .connection(MovieDatabase.TABLE_NAME)
        .insert({
            id,
            title,
            description,
            duration_in_minutes: durationInMinutes,
            year_of_release: yearOfRelease
        })
  }
}