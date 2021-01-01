<template>
    <div
        class="bg-primary-light h-56 text-primary-dark flex flex-col justify-between lg:ml-44"
    >
        <div class="flex justify-evenly mt-12">
            <div>
                <fa-icon
                    :icon="['fab', 'css3-alt']"
                    class="text-5xl text-icon-css"
                />
                <p>Ljubljana, SI</p>
            </div>
            <div>
                <fa-icon
                    :icon="['fas', 'paper-plane']"
                    class="text-5xl text-icon-css"
                />
                <p>email</p>
            </div>
        </div>
        <div class="flex justify-between mx-16 mb-2">
            <div class="flex">
                <div>
                    <fa-icon
                        :icon="['fab', 'linkedin']"
                        class="text-3xl text-icon-css mx-2"
                    />
                </div>
                <div>
                    <fa-icon
                        :icon="['fab', 'github']"
                        class="text-3xl text-icon-css"
                    />
                </div>
            </div>
            <div>copyright</div>
        </div>
    </div>
</template>
