<script>
	import Card from "$lib/components/Card.svelte";
	import LinkButton from "$lib/components/LinkButton.svelte";
	import PageTitle from "$lib/components/PageTitle.svelte";
</script>

<PageTitle name="Cards" />

<section id="cards" class="mt-5">
    <h3 class="mb-3 font-semibold text-lg">Shadow Card</h3>
    <Card classes="mb-5">
        <p>Large, full width sections goes here</p>
    </Card>
    <h3 class="mb-3 font-semibold text-lg">Border Card</h3>
    <Card type="border" classes="mb-5">
        <p>Large, full width sections goes here</p>
    </Card>
    <h3 class="mb-3 font-semibold text-lg">Cards with Title</h3>
    <div class="grid md:grid-cols-2 gap-8 mb-5">
        <div>
            <Card type="border" classes="bg-white text-black">
                <h4 class="font-medium mb-2">Title Here</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit aut eveniet recusandae ad provident sapiente assumenda commodi!</p>
            </Card>
        </div>
        <div>
            <Card type="shadow" classes="bg-primary-700 text-white">
                <h4 class="font-medium mb-2">Title Here</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit aut eveniet recusandae ad provident sapiente assumenda commodi!</p>
            </Card>
        </div>
    </div>
    <h3 class="mb-3 font-semibold text-lg">Cards with Image</h3>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
            <Card type="border" classes="bg-white text-black md:flex">
                <img src="/images/card-image-1.jpg" class="w-full mb-4 md:mb-0 md:w-36 object-cover mr-5 rounded-lg" alt="Card 1">
                <div class="flex flex-col justify-between">
                    <div>
                        <h4 class="font-medium mb-1.5 text-xl">Title Here</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit aut eveniet recusandae ad provident sapiente assumenda commodi!</p>
                    </div>
                    <LinkButton classes="mt-6 block" name="Lorem" />
                </div>
            </Card>
        </div>
        <div>
            <Card type="shadow" classes="bg-primary-700 text-white">
                <h4 class="font-medium mb-2">Title Here</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit aut eveniet recusandae ad provident sapiente assumenda commodi!</p>
            </Card>
        </div>
    </div>
</section>