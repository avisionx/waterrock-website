import 'server-only'

export default function HomePage() {
    return (
        <main>
            <h1 className="font-heading text-4xl">
                Luxury in the Lap of Nature
            </h1>
            <p className="font-body text-base">
                Nestled near Pune, WaterRock Bhor offers...
            </p>
            <div className="bg-beige text-dark min-h-screen font-body">
                <header className="bg-primary p-6 text-white">
                    <h1 className="font-heading text-4xl">WaterRock Bhor</h1>
                    <p className="text-accent">Luxury in Nature</p>
                </header>
                <section className="p-8">
                    <h2 className="mb-4 font-heading text-2xl">
                        Experience Serenity
                    </h2>
                    <p>
                        Wake up to panoramic mountain views and unwind with a
                        bonfire under the stars.
                    </p>
                </section>
            </div>
        </main>
    )
}
