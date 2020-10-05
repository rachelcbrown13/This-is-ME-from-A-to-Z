class Navbar extends Component{
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a class="navbar-brand" href="index.html">This is ME from A to Z</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profile.html">Profiles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboutAuthor.html">About the Author</a>
                            </li>
                        </ul>
        {/* Purchase Modal Trigger */}
                    <button class="btn btn-outline-info" type="button" data-toggle="modal" data-target="#purchaseModal">Purchase</button>
                    </div>
                </nav>
            </div>
        );
    }
}