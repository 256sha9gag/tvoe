import { NewMovies } from '@/entities/NewMovies/UI/NewMovies'
import Menu from '@/features/Menu/UI/Menu'
 
export default function Home() {

    return (
        <main className={`flex w-full h-[100vh]`}>
            <Menu />
            <NewMovies />
        </main>
    )
}
