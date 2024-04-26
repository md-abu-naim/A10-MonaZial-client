

const AllArtCraftItems = () => {
    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Calories</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#28282808] mt-4'>
                        <tr >
                            <td>1</td>
                            <td>name</td>
                            <td> minutes</td>
                            <td> calories</td>
                            <td><button className='btn rounded-full'>View Details Page</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraftItems;